import React, { Fragment } from 'react';

/* start_position - where does this element start (y position)
  relative to the top of the document/page.
  ease - we control how fast or slow the JSX element scrolls relative to our page.
  last_offset - we keep track of how far, in total, we have scrolled up or down.
  animation_running - we use this to get our requestAnimationFrame() loop to start and stop.*/
function ParallaxJSXWrapper(JSXElement, weight) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                start_position: 0,
                ease: 0.05,
                WrappedJSXElement: <Fragment></Fragment>
            }
        }

        componentDidMount() {
            this.last_offset = 0;
            this.animation_running = false;
            this.wrappedJSXElement = null;

            const ref = React.createRef();

            const JSXElementWithRef = React.cloneElement(
                JSXElement,
                { ...JSXElement.props, ref: ref },
            )

            this.setState({
                ease: weight,
                WrappedJSXElement: JSXElementWithRef
            }, () => {
                this.setState({ start_position: ref.current.offsetTop }, () => {
                    this.wrappedJSXElement = ref;
                    document.addEventListener("scroll", this.animate_scroll);
                    console.log('add event');
                });
            });
        }

        componentWillUnmount() {
          document.removeEventListener("scroll", this.animate_scroll);
          console.log('remove event');
        }

        /*If we scroll 100 clicks of our wheel, we want to make sure we put in a
          request to scroll our JSX element(s) 100 times as well.*/
        animate_scroll = () => {
            if (!this.animation_running) {
                this.animation_running = true;
                requestAnimationFrame(this.animation_loop);
            }
        }

        animation_loop = () => {
            let current_offset = window.pageYOffset;

            let difference = current_offset - this.last_offset;
            difference *= this.state.ease;

            if (Math.abs(difference) < 1) {
                this.last_offset = current_offset;
                this.animation_running = false;
                return;
            }


            {/*if (this.wrappedJSXElement.current.style.top == "null"){
              ParallaxJSXWrapper.componentWillUnmount();
            }*/}

            console.log(this.state.start_position - this.last_offset);

            console.log("wrapper",typeof this.wrappedJSXElement, "equals", this.wrappedJSXElement );
            if ((this.wrappedJSXElement) == ""){
              console.log("unmounted!");
              ParallaxJSXWrapper.componentWillUnmount();

            }
            else {
              this.wrappedJSXElement.current.style.top = `${this.state.start_position - this.last_offset}px`;
              this.last_offset += difference;
            }


            requestAnimationFrame(this.animation_loop);
        }

        render() {
            return (
                <Fragment>
                    {this.state.WrappedJSXElement}
                </Fragment>
            )
        }
    }
}

export default ParallaxJSXWrapper;
