export default function ReadyHeader({children}){
  return (
    <>
    <div className="containerHeader">
      <div><h1>{children}</h1></div>
      <div className="">Step 3/3</div>
    </div>
<progress value={1} max={1} />
    </>
    )
}