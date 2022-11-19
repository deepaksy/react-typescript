import React from 'react'
import ClassComponent from '../topics/ClassComponent'
import Destructuring from '../topics/Destructuring'
import EventBinding from '../topics/EventBinding'
import FunctionalComponent from '../topics/FunctionalComponent'
import MethodAsProps from '../topics/MethodAsProps'
import ConditionalRendering from '../topics/conditionalRendering'
import ListRendering from '../topics/listRendering'
import ClassComponentLifecycleMethods from '../topics/classComponentLifecycleMethods'
import FormHandling from '../topics/formHandling'
import PureComponents from '../topics/pureComponents'
import MemoComponent from '../topics/memo'
import RefsComponent from '../topics/refs'
import ForwardingRefComponent from '../topics/forwardingRefs'
import ErrorBoundary from '../topics/errorBoundary'
import HOC from '../topics/higherOrderComponents'
import RenderProps from "../topics/renderProps"
import ClassContext from "../topics/context/classContext"
import AxiosHttp from "../topics/http"
import FunctionalHookComponent from '../topics/hooks/functionalComponent'
import HookDataFetching from '../topics/hooks/dataFetching'

const One = () => {
  return (
    <div>
        <ClassComponent />
        <FunctionalComponent message='I am a message Props!'/>
        <EventBinding/>
        <Destructuring name='Deepak'/>
        <MethodAsProps/>
        <ConditionalRendering/>
        <ListRendering/>
        <ClassComponentLifecycleMethods/>
        <FormHandling/>
        <PureComponents/>
        <MemoComponent/>
        <RefsComponent/>
        <ForwardingRefComponent/>
        <ErrorBoundary/>
        <HOC/>
        <RenderProps/>
        <ClassContext/>
        <AxiosHttp/>
        <FunctionalHookComponent/>
        <HookDataFetching/>
    </div>
  )
}

export default One