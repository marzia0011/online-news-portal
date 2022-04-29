import React, { useState, useEffect } from "react";
import Carousel from "react-simply-carousel";
import DoubleRowFeed from "../components/DoubleRowFeed";
import RowFeed from "../components/RowFeed";
import SingleFeed from "../components/SingleFeed";

var i = 0;

const Home = () => {
    const [national, setNational] = useState([]);
    const [inter, setInter] = useState([]);
    const [pol, setPol] = useState([]);
    const [eco, setEco] = useState([]);
    const [enter, setEnter] = useState([]);
    const [tech, setTech] = useState([]);
    const [sport, setSport] = useState([]);
    const [life, setLife] = useState([]);
    const [top, setTop] = useState([]);
    const [latest, setLatest] = useState([]);
    const [curIndex, setCurIndex] = useState(0);

    useEffect(() => {
        const topInterval = setInterval(() => {
            document.querySelector(`#dot-${i}`).style.fontWeight = '800';
            i++;
            if(i === 5) {
                i = 0;
                document.querySelector('#dot-0').style.fontWeight = '500';
                document.querySelector('#dot-1').style.fontWeight = '500';
                document.querySelector('#dot-2').style.fontWeight = '500';
                document.querySelector('#dot-3').style.fontWeight = '500';
                document.querySelector('#dot-4').style.fontWeight = '500';
            }
        }, 4000);
        fetch("http://localhost:5000/api/v1/articles/feed")
        .then(res => res.json())
        .then(res => {
            setNational(res.data[0]);
            setInter(res.data[1]);
            setPol(res.data[2]);
            setEco(res.data[3]);
            setEnter(res.data[4]);
            setTech(res.data[5]);
            setSport(res.data[6]);
            setLife(res.data[7]);
            setTop(res.data[8]);
            setLatest(res.data[9]);
        });
        return () => clearInterval(topInterval);
    }, []);

    return (
        <div className="container mx-auto">
            <div className="flex my-12">
                <div className="w-1/3">
                    {top.length > 0 && (
                        <>
                            <Carousel
                                activeSlideIndex={curIndex}
                                onRequestChange={(_new) => setCurIndex(_new)}
                                itemsToShow={1}
                                itemsToScroll={1}
                                autoplay={true}
                                delay={3000}
                            >
                                {top && top.map((_top, index) => (
                                    <div key={index} style={{ width: 500, height: 300 }} className="relative border-2 border-black">
                                        <img src={_top.cover} style={{ width: 500, height: 295 }} alt="cover" />
                                        <div className="absolute w-full p-2 bottom-0 bg-gray-500 text-white text-center">
                                            <h3 className="font-mojo">{_top.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            <div className="my-2 text-center">
                                <span id="dot-0" className="mr-2 font-medium">.</span>
                                <span id="dot-1" className="mr-2 font-medium">.</span>
                                <span id="dot-2" className="mr-2 font-medium">.</span>
                                <span id="dot-3" className="mr-2 font-medium">.</span>
                                <span id="dot-4" className="mr-2 font-medium">.</span>
                            </div>
                        </>
                    )}

                </div>
                {latest.length > 0 && (
                    <div className="w-1/3 mx-4">
                        {latest && latest.map((lat, index) => (
                            <div key={index} className="border bg-gray-200 p-4 mb-1 font-mono">
                                <h3>{lat.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
                <div className="w-1/3 p-2 font-mono">
                    <h3 className="font-semibold text-lg">অনলাইন জরিপ</h3>
                    <p className="mt-2">আসন্ন বর্ষায় ডেঙ্গু নিয়ে শঙ্কা রয়েছে কি?</p>
                    <div className="mt-2">
                        <input type="radio" name="survey" id="yes" value={1} />
                        <label htmlFor="yes" className="ml-1">হ্যাঁ</label>
                    </div>
                    <div className="mt-2">
                        <input type="radio" name="survey" id="no" value={2} />
                        <label htmlFor="no" className="ml-1">না</label>
                    </div>
                    <div className="mt-2">
                        <input type="radio" name="survey" id="may" value={3} />
                        <label htmlFor="may" className="ml-1">মন্তব্য নেই</label>
                    </div>
                    <button className="mt-2 border rounded-lg bg-blue-700 text-white py-2 px-4 hover:bg-blue-800" type="button">মতামত দিন</button>
                </div>
            </div>
            <div className="flex">
                {national.length > 0 && <SingleFeed data={national} title="জাতীয়" width="w-1/3" font="text-base" />}
                {inter.length > 0 && <SingleFeed data={inter} title="আন্তর্জাতিক" width="w-1/3" font="text-base" />}
                {pol.length > 0 && <SingleFeed data={pol} title="রাজনীতি" width="w-1/3" font="text-base" />}
            </div>
            {eco.length > 0 && <RowFeed data={eco} title="অর্থনীতি" />}
            {enter.length > 0 && <DoubleRowFeed data={enter} title="বিনোদন" />}
            {tech.length > 0 && <RowFeed data={tech} title="প্রযুক্তি" />}
            <div className="flex">
                {sport.length > 0 && <SingleFeed data={sport} title="খেলাধুলা" width="w-1/2" font="text-2xl" />}
                {life.length > 0 && <SingleFeed data={life} title="লাইফস্টাইল" width="w-1/2" font="text-2xl" />}
            </div>
        </div>
    );
};

export default Home;
