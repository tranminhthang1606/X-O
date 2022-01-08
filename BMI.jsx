const app = document.getElementById("app");


const BMI = () => {
    const [weight, setWeight] = React.useState("");
    const [height, setHeight] = React.useState("");

    const [result, setResult] = React.useState(null);

    const [comment, setComment] = React.useState(null);

    const BMIresult = () => {
        if (weight && height) {
            const bmi = height / weight ** 2;
            setResult(bmi);
             setComment(CommentBMI);
     }
 }
    
    const CommentBMI = () => {
        let cmt;
        if (result < 18.5) {
            cmt = "undifined"
        }
        else if (result >= 18.5 && result < 23.5) {
            cmt = "you're normal";
        }
        else if (result >= 23.5 && result < 30) {
            cmt = "you're a little fat";
        }
        else if (result >= 30) {
            cmt = "YOU ARE FUKING FAT !!!";
        }
        return cmt;
        
    }

   
    
        return (
          <div>
            <div>
              <h1>BOdy Mass Index</h1>
            </div>
            <div>
              <input
                type="number"
                onChange={(e) => setHeight(e.target.value)}
              />
              <input
                type="nember"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <button onClick={BMIresult}>Calculator</button>

              {result && <div>Your BMI : {result.toFixed(2)}</div>}
              {result && <div> {comment}</div>}
            </div>
          </div>
        );
    
}

ReactDOM.render(<BMI/>,app)

