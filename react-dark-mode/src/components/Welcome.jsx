const Welcome = (props) => {
  return (
    <div className={props.theme}>
    <section>
      <h2>Welcome to Our Software Development Company</h2>
      <p>We specialize in building custom software solutions for businesses of all sizes. Our team of experienced developers is ready to bring your project to life.</p>
    </section>
    <section>
      <h2>What Our Clients Say</h2>
      <blockquote>
        <p>The team at ABC Development did an amazing job on our project. They were able to deliver exactly what we needed in a timely and professional manner.</p>
        <cite>Jane Doe, CEO of XYZ Company</cite>
      </blockquote>
      <blockquote>
        <p>We were very impressed with the level of expertise and professionalism shown by the ABC Development team. They were able to take our ideas and turn them into a reality.</p>
        <cite>John Doe, Founder of 123 Company</cite>
      </blockquote>
    </section>
    </div>
  )
}

export default Welcome