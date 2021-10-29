const container = `fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25
w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible
g:pt-0 lg:w-60 xl:w-72 lg:block hidden`;
const asideContainer = `h-full overflow-y-auto scrolling-touch lg:h-auto lg:block
lg:relative lg:sticky lg:bg-transparent overflow-hidden
lg:top-18 bg-white mr-24 lg:mr-0`;
const aside = `px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3
xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)`;
const h5 = `text-gray-900 uppercase tracking-wide
font-semibold mb-3 text-sm lg:text-xs`;
const input = `bg-transparent hover:bg-pink-500 text-pink-700
font-semibold hover:text-white py-2 px-4 hover:border-transparent
rounded w-64 text-left`;

module.exports = {
  container,
  asideContainer,
  aside,
  h5,
  input,
};
