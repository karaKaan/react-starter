import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const a = async () => {
      const a = await axios.get();

      console.log(a);
    };
    a();
  }, []);

  return (
    <div className="container">
      <div>Hello World</div>
    </div>
  );
}
