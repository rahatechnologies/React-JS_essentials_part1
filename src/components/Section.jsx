// export default function Section({title, children, ...props}) {
export default function Section({title, children, ...props}) {

    return (
    //  <section id={id}>
       <section {...props}> 
     {/* <section> */}
        <h2>{title}</h2>
         {children}
    </section>
    )
}``