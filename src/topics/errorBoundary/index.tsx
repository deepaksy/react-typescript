import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

function index() {
  return (
    <div>
        <ErrorBoundary>
        <Hero heroname='Batman'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname='Superman'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname='joker'/>
        </ErrorBoundary>
    </div>
  )
}

export default index