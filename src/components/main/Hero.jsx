import Button from "../buttons/Button";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="w-full h-screen">
      <Container>
        <div className="flex items-start flex-col justify-center h-full">
          <div className="flex flex-col">
            <span className=" text-s">
              More than influencer marketing software
            </span>
            <h3 className="font-bold text-[48px]">
              Let us power your next sports & <br></br>entertainment marketing
              campaign!
            </h3>
            <span className="text-[18px] mt-2">
              Connecting brands to professional and collegiate athletes, music
              <br></br>
              artists, content creators, teams and events. Enjoy the data and
              <br></br>
              transparency of an influencer platform with the expertise of a
              <br></br>
              sports energy.
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 my-4">
            <Button text="SIGNUP FOR FREE"></Button>
            <Button text="SIGNUP FOR FREE"></Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
