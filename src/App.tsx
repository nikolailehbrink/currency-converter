import ConvertCurrencyForm from "./components/ConvertCurrencyForm";
// Supports weights 100-900
import "@fontsource-variable/inter";
import { Card } from "./components/ui/card";

function App() {
  return (
    <div className="min-h-dvh flex items-center py-12 space-y-4 bg-gradient-to-br from-neutral-100 to-neutral-50">
      <div className="container flex flex-col justify-center items-center space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-600">
            Currency Converter
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
            Easily convert between different currencies with our intuitive tool.
          </p>
        </div>
        <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg">
          <ConvertCurrencyForm />
        </Card>
      </div>
    </div>
  );
}

export default App;
