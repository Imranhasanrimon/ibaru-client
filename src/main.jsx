import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import AuthProvider from './providers/AuthProvider'
import { ThemeProvider } from './providers/ThemeProvider'
import { ParallaxProvider } from "react-scroll-parallax"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ParallaxProvider>
          <RouterProvider router={router} />
        </ParallaxProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)