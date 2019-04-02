import React, { lazy, Suspense } from 'react'
import Loading from '../component/Loading'

export default function withLazy(path) {
  const LazyComponent = lazy(path)
  return function(props) {
    return (
	<Suspense fallback={<Loading/>}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }
}