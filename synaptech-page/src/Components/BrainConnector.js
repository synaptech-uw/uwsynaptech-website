import React from "react";
import "../styles/Styles.css";
import SvgLines from 'react-mt-svg-lines';

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   hovering: false,
    //   animateMotionRef: React.createRef(),
    //   animateRef: React.createRef(),
    // };
    this.linkPath = React.createRef(null);
    // this.animateMotionRef = React.createRef();
    // this.animateRef = React.createRef();
  }

  calculateBezier() {
    let x1 = this.props.startX;
    let y1 = this.props.startY;
    let x2 = this.props.endX;
    let y2 = this.props.endY;
    //console.log(window.innerWidth);

    var path = `M${x2},${y2}
    C${x2 - window.innerWidth/3},${y2}
    ${x1 + window.innerWidth/3},${y1}
    ${x1},${y1}`;

    if (x1 > x2) {
      path = `M${x2},${y2}
      C${x2 + window.innerWidth/3},${y2}
      ${x1 - window.innerWidth/3},${y1}
      ${x1},${y1}`;
    }
    return path
  }
  // remove(e) {
  //   e.preventDefault();
  //   this.props.removeLink(this.props.id);
  // }
  // runAnimation() {
  //   this.state.animateMotionRef.current.beginElement();
  //   this.state.animateRef.current.beginElement();
  // }
  render() {
    return (
      <div>
        <SvgLines animate={ true } fade = { true } duration={ 1200 } >
          <svg className='wire'>
            {/* <path
              className='backgroundPath'
              d={this.calculateBezier.bind(this)()}
              onMouseOver={() => this.setState({ hovering: true })}
              onMouseOut={() => this.setState({ hovering: false })}
            /> */}
            <path
              // id={this.props.id}
              ref={this.linkPath}
              className='linkPath'
              d={this.calculateBezier.bind(this)()}
              //onContextMenu={this.remove.bind(this)}
            />
            {/* <circle className='droplet'>
              <animateMotion
                ref={this.state.animateMotionRef}
                dur='1s'
                repeatCount='1'
                calcMode='spline'
                keySplines='0.4 0 0.2 1'
                keyTimes='0; 1'
                begin='indefinite'>
                <mpath xlinkHref={`#${this.props.id}`} />
              </animateMotion>
              <animate
                ref={this.state.animateRef}
                begin='indefinite'
                attributeType='XML'
                attributeName='fill'
                from='#2aa198'
                to='#6c71c4'
                dur='1s'
                repeatCount='1'
              />
            </circle> */}
          </svg>
        </SvgLines>
      </div>
    );
  }
}