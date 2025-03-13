// тут будет счетчик с названием и инпутом; мы затем переиспользуем его 4 раза в основном блоке
function Counter({ name, onChange, userInput }) {

  function toCamelCase(s) {
    const [first, second] = s.split(" ");
    return second
      ? first.toLowerCase() + second[0].toUpperCase() + second.slice(1)
      : first.toLowerCase();
  }

  return (
    <div>
      <label>{name}</label>
      <input
        type="number"
        id={toCamelCase(name)}
        name={toCamelCase(name)}
        min="10"
        max="100"
        required
        value={userInput[toCamelCase(name)]}
        onChange={(event) =>
          onChange(toCamelCase(name), event.target.value)
        }
      />
    </div>
  );
}

export default Counter;
