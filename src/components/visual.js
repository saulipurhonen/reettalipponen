import React from "react"
import p5 from "p5"
import TRUNK from "vanta/dist/vanta.trunk.min"

class MyComponent extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = TRUNK({
      el: this.vantaRef.current,
      p5: p5,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 1000.0,
      minWidth: 1000.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x91435b,
      backgroundColor: 0x16171b,
      spacing: 3.5,
      chaos: 0.7,
      speed: 0.1,
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "-10rem",
          right: "1000px",
          zIndex: "-1",
        }}
        ref={this.vantaRef}
      >
        {/* Foreground content goes here */}
      </div>
    )
  }
}

export default MyComponent
