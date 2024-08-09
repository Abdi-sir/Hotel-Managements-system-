
import { useMoveBack } from "../hooks/useMoveBack";



function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main>
      <div>
       
          The page you are looking for could not be found 😢

        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
