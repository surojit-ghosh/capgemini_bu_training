import { DEFAULT_FILTERS } from '../lib/constants';

const inputCls =
  'w-full bg-white border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-neutral-900 outline-none transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500';

const labelCls = 'block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1';

function Select({ id, value, onChange, children }) {
  return (
    <select id={id} className={inputCls + ' cursor-pointer'} value={value} onChange={onChange}>
      {children}
    </select>
  );
}

export default function FilterBar({ filters, onFilterChange, categories = [] }) {
  const set = (key, value) => onFilterChange({ ...filters, [key]: value });
  const clear = () => onFilterChange(DEFAULT_FILTERS);

  return (
    <div className='bg-white border border-neutral-200 rounded p-4 mb-6 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-4 items-end font-sans'>
      <div className='col-span-2 sm:col-span-3 md:flex-1 md:min-w-45'>
        <label htmlFor='search' className={labelCls}>Search</label>
        <input id='search' type='text' className={inputCls} placeholder='Search by title…' value={filters.search} onChange={(e) => set('search', e.target.value)} />
      </div>

      <div className='flex flex-col gap-1 w-full md:w-auto md:min-w-30'>
        <label htmlFor='category' className={labelCls}>Category</label>
        <Select id='category' value={filters.category} onChange={(e) => set('category', e.target.value)}>
          <option value='All'>All</option>
          {categories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
        </Select>
      </div>

      <div className='flex flex-col gap-1 w-full md:w-auto md:min-w-30'>
        <label htmlFor='status' className={labelCls}>Status</label>
        <Select id='status' value={filters.status} onChange={(e) => set('status', e.target.value)}>
          <option value='All'>All</option>
          <option value='Open'>Open</option>
          <option value='In Progress'>In Progress</option>
          <option value='Resolved'>Resolved</option>
        </Select>
      </div>

      <div className='flex flex-col gap-1 w-full md:w-auto md:min-w-30'>
        <label htmlFor='priority' className={labelCls}>Priority</label>
        <Select id='priority' value={filters.priority} onChange={(e) => set('priority', e.target.value)}>
          <option value='All'>All</option>
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </Select>
      </div>

      <div className='flex flex-col gap-1 w-full md:w-auto md:min-w-30'>
        <label htmlFor='sortBy' className={labelCls}>Sort</label>
        <Select id='sortBy' value={filters.sortBy} onChange={(e) => set('sortBy', e.target.value)}>
          <option value='latest'>Latest</option>
          <option value='oldest'>Oldest</option>
          <option value='title'>Title A–Z</option>
        </Select>
      </div>

      <div className='flex flex-col justify-end w-full md:w-auto'>
        <button className='bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 rounded px-3 py-1.5 text-xs font-medium transition duration-150 cursor-pointer w-full md:w-auto' onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
