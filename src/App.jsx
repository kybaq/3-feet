import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import ModalProvider from "./contexts/modal.context";
import router from "./routes/router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
