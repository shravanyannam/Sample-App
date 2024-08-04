export default function Parent() {
    const valueArr=  [["C1"], ["C1", "C2", "C3"], ["C1" ,"C2"], ["C1", "C2", "C3", "C4"]];

    const arrayWithSpace = (arr) => {
        const spaces = '\u00A0'.repeat(arr.length * 2); // \u00A0 is a non-breaking space character
    return (
      <div>
        {/* {spaces} */}
        
        {arr.join(' ')}
       
      </div>
    );
    }

  return (
    <div>
        {valueArr.map((arr, index) => (
            <div key={index}>
                <span style={{justifyContent:"left"}}>
                {arrayWithSpace(arr)}
                </span>
            </div>       
        ))}
    </div>
  )
}
