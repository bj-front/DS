<template>
  <div class="utopia-data-table">
    <div v-if="title || $slots.header" class="table-header">
      <h3 v-if="title" class="table-title">{{ title }}</h3>
      <slot name="header" />
    </div>
    
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              :class="getColumnClasses(column)"
              @click="handleSort(column)"
            >
              <div class="column-header">
                <span>{{ column.label }}</span>
                <Icon
                  v-if="column.sortable"
                  :name="getSortIcon(column.key)"
                  class="sort-icon"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in sortedData"
            :key="getRowKey(row, index)"
            :class="getRowClasses(row, index)"
            @click="handleRowClick(row, index)"
          >
            <td
              v-for="column in columns"
              :key="column.key"
              :class="getCellClasses(column, row)"
            >
              <slot
                :name="`cell-${column.key}`"
                :value="getNestedValue(row, column.key)"
                :row="row"
                :column="column"
                :index="index"
              >
                {{ formatCellValue(getNestedValue(row, column.key), column) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div v-if="loading" class="table-loading">
      <div class="loading-spinner">Chargement...</div>
    </div>
    
    <div v-if="!loading && sortedData.length === 0" class="table-empty">
      <slot name="empty">
        <p>Aucune donnée disponible</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '../../atoms'

interface Column {
  key: string
  label: string
  sortable?: boolean
  width?: string
  align?: 'left' | 'center' | 'right'
  formatter?: (value: any) => string
}

interface Props {
  columns: Column[]
  data: any[]
  title?: string
  loading?: boolean
  selectable?: boolean
  striped?: boolean
  hoverable?: boolean
  rowKey?: string | ((row: any) => string)
}

interface Emits {
  (e: 'row-click', row: any, index: number): void
  (e: 'sort-change', sortKey: string, sortOrder: 'asc' | 'desc' | null): void
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  selectable: false,
  striped: true,
  hoverable: true,
  rowKey: 'id'
})

const emit = defineEmits<Emits>()

const sortKey = ref<string>('')
const sortOrder = ref<'asc' | 'desc' | null>(null)

const sortedData = computed(() => {
  if (!sortKey.value || !sortOrder.value) {
    return props.data
  }
  
  return [...props.data].sort((a, b) => {
    const aValue = getNestedValue(a, sortKey.value)
    const bValue = getNestedValue(b, sortKey.value)
    
    if (aValue === bValue) return 0
    
    const comparison = aValue > bValue ? 1 : -1
    return sortOrder.value === 'asc' ? comparison : -comparison
  })
})

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}

function getRowKey(row: any, index: number): string {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row)
  }
  return getNestedValue(row, props.rowKey) || index.toString()
}

function handleSort(column: Column) {
  if (!column.sortable) return
  
  if (sortKey.value === column.key) {
    if (sortOrder.value === 'asc') {
      sortOrder.value = 'desc'
    } else if (sortOrder.value === 'desc') {
      sortOrder.value = null
      sortKey.value = ''
    } else {
      sortOrder.value = 'asc'
    }
  } else {
    sortKey.value = column.key
    sortOrder.value = 'asc'
  }
  
  emit('sort-change', sortKey.value, sortOrder.value)
}

function getSortIcon(columnKey: string): string {
  if (sortKey.value !== columnKey) return 'ChevronsUpDown'
  if (sortOrder.value === 'asc') return 'ChevronUp'
  if (sortOrder.value === 'desc') return 'ChevronDown'
  return 'ChevronsUpDown'
}

function getColumnClasses(column: Column) {
  return {
    'sortable': column.sortable,
    [`align-${column.align || 'left'}`]: true
  }
}

function getRowClasses(row: any, index: number) {
  return {
    'striped': props.striped && index % 2 === 1,
    'hoverable': props.hoverable,
    'selectable': props.selectable
  }
}

function getCellClasses(column: Column, row: any) {
  return {
    [`align-${column.align || 'left'}`]: true
  }
}

function formatCellValue(value: any, column: Column): string {
  if (column.formatter) {
    return column.formatter(value)
  }
  return value?.toString() || ''
}

function handleRowClick(row: any, index: number) {
  emit('row-click', row, index)
}
</script>

<style scoped>
.utopia-data-table {
  position: relative;
  border: 1px solid var(--utopia-color-border);
  border-radius: 8px;
  background: var(--utopia-color-surface);
  overflow: hidden;
}

.table-header {
  padding: 1rem;
  border-bottom: 1px solid var(--utopia-color-border);
  background: var(--utopia-color-surface-secondary);
}

.table-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--utopia-color-text-primary);
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--utopia-color-border);
}

.data-table th {
  background: var(--utopia-color-surface-secondary);
  font-weight: 600;
  color: var(--utopia-color-text-primary);
  white-space: nowrap;
}

.data-table th.sortable {
  cursor: pointer;
  user-select: none;
}

.data-table th.sortable:hover {
  background: var(--utopia-color-surface-tertiary);
}

.column-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sort-icon {
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

.data-table th.sortable:hover .sort-icon {
  opacity: 1;
}

.data-table td {
  color: var(--utopia-color-text-primary);
}

.data-table tr.striped {
  background: var(--utopia-color-surface-secondary);
}

.data-table tr.hoverable:hover {
  background: var(--utopia-color-surface-tertiary);
}

.data-table tr.selectable {
  cursor: pointer;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

.table-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  padding: 2rem;
  color: var(--utopia-color-text-secondary);
}

.table-empty {
  padding: 2rem;
  text-align: center;
  color: var(--utopia-color-text-secondary);
}
</style>