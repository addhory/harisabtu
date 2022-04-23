import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Biasanya digunakan oleh developer untuk menaruh fallback UI
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error) {
    // meng-eksekusi pengiriman error ke sebuah error dashboard / handler seperti web service
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong {this.state.message}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
