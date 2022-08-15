import * as THREE from 'three';
import {useEffect} from "react"
import Model from './Model';

// Store Model Instance in Module Scope
let model

export const useTHREE = (ref) => {

  useEffect(() => {

    // Initialize New Model or Update Existing Model
    if (!model) model = new Model(ref.canvas).init()
    else model.updateCanvas(ref.current)

    // Just stop the tick in case
    return () => model.stopTick()

  }, [ref.current])

}