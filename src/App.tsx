import ConvertCurrencyForm from "./components/ConvertCurrencyForm";
// Supports weights 100-900
import "@fontsource-variable/inter";

function App() {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center py-12 bg-gradient-to-br from-neutral-100 to-neutral-50">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-600">
          Currency Converter
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
          Easily convert between different currencies with our intuitive tool.
        </p>
      </div>
      <ConvertCurrencyForm />
    </div>
  );
}

export default App;
