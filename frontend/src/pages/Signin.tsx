import { Quote } from "@radix-ui/themes";
import Auth from "../components/Auth";

function Signin() {
  return <div><div>
  <div className="grid grid-cols-2">
    <div> <Auth type="signin" /> </div>
    <div className=" hidden lg:block">
      <Quote />
    </div>
  </div>
</div></div>;
}

export default Signin;
