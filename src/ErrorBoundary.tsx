import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false, error: null };
    constructor(props: any) {
        super(props);
    }
    static getDerivedStateFromError(error: any) {
        return { hasError: true, error };
      }
      componentDidCatch(error: any, info: any) {
        console.error('Error caught:', error, info);
      }
      render() {
        if ((this.state as any).hasError) {
          return (this.props as any).fallback
        }
        return (this.props as any).children;
      }
  }

  export default ErrorBoundary;