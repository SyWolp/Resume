export default function PrintButton() {
    const printButton = (e:any) => {
        e.target.style.visibility = 'hidden';
        window.print();
        e.target.style.visibility = 'visible';
      }
      return (
          <button onClick={printButton}>프린트</button>
      )
}