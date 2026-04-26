/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  safelist: [
    // Layout & positioning
    'container', 'mx-auto', 'fixed', 'absolute', 'relative', 'sticky', 'inset-0',
    'z-10', 'z-20', 'z-30', 'z-40', 'z-50',
    'top-0', 'left-0', 'right-0', 'bottom-0',
    'top-[65px]',
    'overflow-hidden', 'overflow-x-auto', 'overflow-y-auto',
    'snap-x', 'snap-mandatory', 'snap-start', 'snap-center',
    
    // Display & flex
    'flex', 'inline-flex', 'grid', 'block', 'inline-block', 'hidden',
    'flex-1', 'flex-shrink-0', 'flex-col', 'flex-row', 'flex-wrap', 'flex-nowrap',
    'items-center', 'items-start', 'items-end', 'items-stretch',
    'justify-between', 'justify-center', 'justify-end',
    'self-start', 'self-end',
    
    // Spacing
    'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6', 'px-8', 'px-10',
    'py-1', 'py-2', 'py-3', 'py-4', 'py-6', 'py-8', 'py-10', 'py-12', 'py-14', 'py-16',
    'p-2', 'p-3', 'p-4', 'p-6', 'p-8', 'p-10',
    'pt-8', 'pb-8', 'pb-12', 'pb-16',
    'mt-2', 'mt-4', 'mt-6', 'mt-8', 'mt-10', 'mt-12',
    'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-6', 'mb-8', 'mb-10', 'mb-12', 'mb-16',
    'ml-0', 'ml-2', 'ml-4', 'mr-0', 'mr-2', 'mr-4', 'mr-auto',
    'space-x-2', 'space-x-3', 'space-x-4', 'space-x-6', 'space-x-8',
    'space-y-2', 'space-y-4', 'space-y-6',
    'gap-0', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-8',
    
    // Grid
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-12',
    'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-12',
    
    // Sizing
    'w-auto', 'w-full', 'w-3', 'w-3.5', 'w-4', 'w-5', 'w-6', 'w-8', 'w-10', 'w-16', 'w-20', 'w-24', 'w-28', 'w-44', 'w-48', 'w-56', 'w-64',
    'h-auto', 'h-full', 'h-3', 'h-3.5', 'h-4', 'h-5', 'h-6', 'h-8', 'h-9', 'h-10', 'h-16', 'h-20', 'h-24', 'h-28', 'h-40', 'h-44', 'h-48', 'h-64', 'h-72', 'h-96',
    'min-h-72', 'min-h-full',
    'max-w-xs', 'max-w-md', 'max-w-2xl', 'max-w-4xl', 'max-w-7xl',
    
    // Typography
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
    'text-[10px]',
    'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black',
    'leading-none', 'leading-tight', 'leading-normal', 'leading-relaxed',
    'tracking-tight', 'tracking-wide', 'tracking-wider', 'tracking-widest',
    'text-left', 'text-center', 'text-right',
    'uppercase', 'lowercase', 'capitalize', 'truncate', 'whitespace-nowrap',
    
    // Colors - text
    'text-white', 'text-black', 'text-green-500', 'text-green-400',
    'text-gray-300', 'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700',
    'text-cyan-400',
    
    // Colors - bg
    'bg-white', 'bg-black', 'bg-green-600',
    'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-800', 'bg-gray-900',
    
    // Colors - border
    'border-white', 'border-cyan-400',
    
    // Border radius
    'rounded', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full',
    
    // Shadows
    'shadow', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-inner',
    
    // Opacity
    'opacity-0', 'opacity-25', 'opacity-50', 'opacity-75', 'opacity-90', 'opacity-100',
    
    // Transitions & transforms
    'transition', 'transition-all', 'transition-colors', 'transition-opacity', 'transition-transform',
    'duration-200', 'duration-300', 'duration-500', 'duration-700',
    'ease-in', 'ease-out', 'ease-in-out',
    'scale-105', 'scale-110',
    'transform',
    
    // Object fit
    'object-cover', 'object-contain',
    
    // Misc
    'cursor-pointer', 'pointer-events-none', 'select-none',
    'sr-only', 'not-sr-only',
    'no-scrollbar',
    'group',
    'inset-0',
    'sticky',
    'col-span-2',
    
    // CSS variable classes
    'bg-[var(--bg-primary)]', 'bg-[var(--bg-secondary)]', 'bg-[var(--bg-card)]',
    'text-[var(--text-primary)]', 'text-[var(--text-secondary)]',
    'border-[var(--border-color)]',
    'bg-[var(--accent-primary)]', 'text-[var(--accent-primary)]',
    'from-[var(--accent-primary)]', 'to-[var(--accent-secondary)]',
    
    // Gradients (safelist)  
    'bg-gradient-to-t', 'bg-gradient-to-r', 'from-black/60', 'via-black/20', 'to-transparent',
    'from-black/70', 'from-black/65', 'from-black/75', 'from-black/50',
    'from-purple-900/80', 'via-purple-900/40',
    'to-cyan-400',
    
    // Hover/focus variants (explicit)
    'hover:scale-105', 'hover:scale-110',
    'hover:bg-white/20', 'hover:bg-cyan-400/15', 'hover:bg-gray-100',
    'hover:text-white', 'hover:border-[var(--accent-primary)]',
    'hover:text-[var(--accent-primary)]',
    'hover:translate-x-1',
    'hover:opacity-100',
    'hover:gap-2',
    'hover:bg-[var(--accent-primary)]',
    'group-hover:scale-105', 'group-hover:translate-x-1', 'group-hover:opacity-100',
    
    // Responsive variants
    'sm:flex', 'sm:hidden', 'sm:flex-row', 'sm:items-center', 'sm:justify-between',
    'sm:grid-cols-2', 'sm:inline',
    'md:flex', 'md:hidden', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5',
    'md:col-span-7', 'md:col-span-1', 'md:col-span-2',
    'md:gap-4', 'md:gap-5',
    'md:px-6', 'md:px-12', 'md:px-4',
    'md:py-6', 'md:py-10', 'md:py-24',
    'md:text-center',
    'md:rounded-r-none',
    'md:items-center',
    'md:mb-6', 'md:mt-14',
    'lg:flex', 'lg:hidden',
    'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4',
    'lg:col-span-2',
    'lg:rounded-r-2xl',
    'lg:min-h-full',
    'lg:h-96',
    'lg:px-6',
    'xl:grid-cols-4',
    '2xl:grid-cols-4',
    
    // Product card classes (from tienda.js)
    'pcard', 'pcard-img', 'pcard-num', 'pcard-wish', 'pcard-sep',
    'pcard-body', 'pcard-meta', 'pcard-brand', 'pcard-subcat',
    'pcard-name', 'pcard-footer', 'pcard-price', 'pcard-stars',
    'pcard-rcount', 'pcard-add', 'in-cart',
    'filter-pill', 'active',
    'empty-grid',
    'orbitron',
    
    // Responsive text sizes
    'md:text-2xl', 'md:text-3xl', 'md:text-4xl', 'md:text-xl',
    'md:text-lg', 'md:text-base',
    'lg:text-5xl',
    
    // Responsive sizing
    'md:w-24', 'md:w-52', 'md:w-64',
    'md:h-24', 'md:h-52', 'md:h-72', 'md:h-80',
    'w-9', 'h-9',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
