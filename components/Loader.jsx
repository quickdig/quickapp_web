'use client';
import React, { useEffect, useRef } from "react";

const Loader = () => {
  const svgRef = useRef(null);
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const loader = loaderRef.current;
    const text = textRef.current;

    if (!svg || !loader || !text) return;

    const tl = gsap.timeline();

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(text, {
      delay: 1.5,
      y: -100,
      opacity: 0,
    })
      .to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
      })
      .to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      })
      .to(loader, {
        y: -1500,
      })
      .to(loader, {
        zIndex: -1,
        display: "none",
      })
      .from(
        "header",
        {
          y: 200,
        },
        "-=1.5"
      )
      .from(
        "header .container",
        {
          y: 40,
          opacity: 0,
          delay: 0.3,
        },
        "-=1.5"
      );
  }, []);
  return (
    <>
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <div className="loader-wrap-heading">
          <div className="load-text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      </div>

      <div className="circlemainDv">
        <div className="row mx-auto my-1">
          <div className="col">
            <div className="circle desing1">
              <h4 className="fsz-30">Welcome</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="body_wrapper">
        <section className="doc_banner_area_two">
          <div className="b_plus one" data-parallax='{"x": 250, "y": 160, "rotateZ":500}'>
            <img src="img/home_two/plus.png" alt="" />
          </div>
          <div className="b_plus two" data-parallax='{"x": 250, "y": 260, "rotateZ":500}'>
            <img src="img/home_two/plus_one.png" alt="" />
          </div>
          <div className="b_round r_one" data-parallax='{"x": 0, "y": 100, "rotateZ":0}'></div>
          <div className="b_round r_two" data-parallax='{"x": -10, "y": 80, "rotateY":0}'></div>
          <div className="b_round r_three"></div>
          <div className="b_round r_four"></div>

          <img
            className="p_absolute building_img"
            src="https://html-template.spider-themes.net/kbdoc/kbdoc-html/img/home_two/building.png"
            alt=""
          />
          <img
            className="p_absolute table_img wow fadeInLeft"
            src="https://html-template.spider-themes.net/kbdoc/kbdoc-html/img/home_two/table.svg"
            alt=""
          />
          <img
            className="p_absolute flower wow fadeInUp"
            data-wow-delay="0.6s"
            src="https://html-template.spider-themes.net/kbdoc/kbdoc-html/img/home_two/flower.png"
            alt=""
          />
          <img
            className="p_absolute bord wow fadeInRight"
            data-wow-delay="0.4s"
            src="https://html-template.spider-themes.net/kbdoc/kbdoc-html/img/home_two/bord.png"
            alt=""
          />
          <img
            className="p_absolute girl wow fadeInRight"
            data-wow-delay="0.8s"
            src="https://html-template.spider-themes.net/kbdoc/kbdoc-html/img/home_two/girl.png"
            alt=""
          />

          <div className="container">
            <div className="doc_banner_text_two text-center">
              <h2>Looking for help?</h2>
              <p>KnowAll is a fully featured knowledge base theme for WordPress.</p>
              <form action="#" className="banner_search_form">
                <input type="search" className="form-control" placeholder="Search the Knowledge Base" />
                <button type="submit" className="search_btn">Search</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Loader;

