import { ChakraProvider, Flex } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from 'react-dom/client';

import EventViewer from "./components/EventViewer";
import Header from "./components/Header";
import StatusMonitor from "./components/StatusMonitor";
import pkgJson from "./package.json";
import './index.css';

console.log(pkgJson);

// const END_POINT = "http://localhost:8100"
const END_POINT = '/foo';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Flex height="100%" flexDir="column">
      <Header url={END_POINT}/>
      <StatusMonitor url={END_POINT}/>
      <EventViewer url={END_POINT}/>
      </Flex>
    </ChakraProvider>
    </QueryClientProvider>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App  />)
