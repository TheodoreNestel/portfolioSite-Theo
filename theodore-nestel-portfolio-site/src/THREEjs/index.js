import * as THREE from 'three';
import {useEffect} from "react"
import Model from './Model';

// Store Model Instance in Module Scope
let model

export const useTHREE = (ref) => {

  useEffect(() => {

    // Initialize New Model or Update Existing Model
    if (!model) model = new Model(ref.canvas).init()
    else model.update(ref.current)

    // Just stop the tick in case
    return () => model.stopTick()

  }, [ref.current])

}

export const useTrasition = (planet) => {

  useEffect(() => {

    if (!model) return

    // Just an example of how we can call a method from our model
    model.changePlanet(planet)

  }, [planet]) 

}