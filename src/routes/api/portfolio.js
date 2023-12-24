const express = require("express")

const router = express.Router()

router.get("/",(req,res)=>{
    data={
        pagetitle:"Uttiya - Home",
        navTitle:"Home"
    }
    res.render("./portfolio/home",data)
})

router.get("/work",(req,res)=>{
    data={
        pagetitle:"Uttiya - Work",
        navTitle:"Work"
    }
    res.render("./portfolio/work",data)
})

router.get("/publications",(req,res)=>{
    data={
        pagetitle:"Uttiya - Publications",
        navTitle:"Publications",
        publications:[
            {
                title:"CiteVis: Visual Analysis of Overlapping Citation Intents as Dynamic Sets",
                conference:"IEEE Pacific Visualization Symposium (PacificVis - Poster)",
                date:"Mar 5, 2022",
                authors:"Agarwal, Shivam; Ghosh, Uttiya; Beck, Fabian; Sreevalsan-Nair, Jaya",
                abstract:"A scientific article can be cited with different intents over several years. The citation intents can be inferred by classifying the citation text into different categories. With multiple citations to the same article, the citation intent categories overlap, making their analysis more challenging. We model the categories as dynamic sets and propose an approach to visualize temporal citation trends of an article across overlapping citation intents. The approach supports comparison between the citation trends of two seed articles of interest. The implemented prototype supports searching and selecting seed articles from a Semantic Scholar dataset.", 
                citation:'Shivam Agarwal, Uttiya Ghosh, Fabian Beck, Jaya Sreevalsan-Nair, "CiteVis: Visual Analysis of Overlapping Citation Intents as Dynamic Sets" In The proceedings of IEEE Pacific Visualization Symposium (PacificVis - Poster), 2022.',
                prePrintUrl:"/files/CiteVis_PrePrint.pdf",
                demoUrl:"https://www.youtube.com/watch?v=NUtGWdCgTzM"
            },
            {
                title:"Adaptive Multi-bit Image Steganography using Pixel-Pair Differential Approach",
                conference:"Advances in Intelligent Systems and Computing, vol 563. Springer, Singapore",
                date:"Dec 21, 2016",
                authors:"Ghosh, Uttiya; Burman, Debanjan; Maity, Smritikana; Mukherjee, Imon",
                abstract:"With the increase of communication over Internet, the issue of security has become an important factor. Steganography is a consequence of the increasing degradation of reliability. The roots of steganography lie in ancient Greek civilization. With time, steganography has moved a long way in the path of advancement. It started off with least significant bit (LSB) embedding which mainly focussed on data security. With time, many algorithms have been designed using multi-bit steganography which takes into account both security and capacity of data embedded. In this paper, a new technique has been introduced where various parameters determine the number of bits embedded. This helps to improve the robustness of this method. We show empirically that our method withstands the statistical attacks and benchmark.", 
                citation:'Ghosh, U., Burman, D., Maity, S., Mukherjee, I. (2018). Adaptive Multi-bit Image Steganography Using Pixel-Pair Differential Approach. In: Saeed, K., Chaki, N., Pati, B., Bakshi, S., Mohapatra, D. (eds) Progress in Advanced Computing and Intelligent Engineering. Advances in Intelligent Systems and Computing, vol 563. Springer, Singapore. https://doi.org/10.1007/978-981-10-6872-0_5',
                prePrintUrl:"/files/ICACIE_PrePrint.pdf",
                doiUrl:"https://doi.org/10.1007/978-981-10-6872-0_5"
            },
            {
                title:"Statistical Attack Resistant Multibit Steganography using Mobile Keypad Character Encoding",
                conference:"International Conference of Telecommunication Technology and Management",
                date:"Apr 11, 2015",
                authors:"Ghosh, Uttiya; Maity, Smritikana; Mukherjee, Imon",
                abstract:"Communication over the internet has resulted in very fast communication over the years, but it has resulted in degradation of reliability and secrecy which brings in the concept of steganography. Many steganographic methods introduced with time has helped in overcoming this disadvantage by increasing the security during data communication. While least significant bit embedding steganographic algorithms in images helps to add security but this also results in low embedding capacity, multiple bit embedding adds on to the capacity of data that can be hidden. The process proposed in this paper uses a special mobile keypad character code for every character which is embedded in a randomized circular row major format in cover images. This code is based on the mobile keypad structure which not only adds to data security over algorithms using conventional binary code but also makes the proposed algorithm capable of withstanding visual attacks with almost no perceivable distortion in the stego images. Along with a high embedding efficiency and embedding capacity the proposed algorithm can withstand structural attacks as well as statistical attacks viz. Sample Pair test and chi-square test due to its randomized nature. Finally, the success of this method lies in its compilation with the standards set by Stirmark Benchmark.", 
                citation:'Ghosh, U., Maity, S., Mukherjee, I.: Statistical attack resistant multi-bit steganography using mobile keypad character encoding. In: International Conference on Telecommunication Technology and Management (ICTTM-2015), IIT Delhi, India, pp. 19, 11–12 Apr 2015. ISBN: 987-0-9926800-5-3',
                prePrintUrl:"/files/ICACIE_PrePrint.pdf",
                demoUrl:"/files/ICTTM_Demo.pptx"
            }
        ]
    }
    res.render("./portfolio/publications",data)
})

router.get("/contact",(req,res)=>{
    data={
        pagetitle:"Uttiya - Contact",
        navTitle:"Contact"
    }
    res.render("./portfolio/contact",data)
})

module.exports = router