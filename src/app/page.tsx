import Image from "next/image";
import styles from "./page.module.css";
import Modals from "@/components/elements/modals";

export default function Home() {
  return (
    <>
      <Modals size="sm" position="center" open={true}>
        <div className="row">
          <div className="col-6">
          <h3>Test</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          </div>
          <div className="col-6">
          <h3>Test</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          </div>
        </div>
      </Modals>
    </>
  );
}
