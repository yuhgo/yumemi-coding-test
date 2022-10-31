import React, { FC, ReactNode } from "react"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"

type LayoutErrorBoundaryProps = {
  children: ReactNode
}

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

/** @package */
export const LayoutErrorBoundary: FC<LayoutErrorBoundaryProps> = (props) => {
  const { children } = props

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  )
}
