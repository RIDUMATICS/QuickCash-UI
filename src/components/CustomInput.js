export default function CustomInput(props) {
  return (
    <div class="mb-6">
      <label
        for={props.name}
        class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        id={props.name}
        placeholder={props.label}
        required={props.required}
        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
      />
    </div>
  );
}
