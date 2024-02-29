import React from "react";
import {
  Advantages,
  HomeCarousel,
  HomeOverlay,
  Skills,
  ZoomCollection,
} from "@components";
import { MotionCards } from "@components";
import { JournalNews } from "@components";
import { Container } from "reactstrap";
const Page = () => {
  return (
    <React.Fragment>
      <HomeCarousel />
      <ZoomCollection />
      <section>
        <Container>
          <Advantages />
        </Container>
      </section>
      <HomeOverlay />
      <MotionCards />
      <Skills />
      <JournalNews />
      <div className="bg-dark-gray text-center py-5">
        <h2 className="text-white">Join our Mailing List</h2>
      </div>
    </React.Fragment>
  );
};
export default Page;
