export default function AttendeeHeader({children}){
  return (
    <>
    <div className="containerHeader">
      <div><h1>{children}</h1></div>
      <div className="">Step 2/3</div>
    </div>
<progress value={0.7} max={1} />
    </>
    )
}