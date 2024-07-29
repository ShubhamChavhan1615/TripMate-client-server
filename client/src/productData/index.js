const products = [
    {
        "title": "Explorer's Haven",
        "description": "L'Oréal Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        "price": 19999,
        "discountPercentage": 13.31,
        "rating": 4.83,
        "category": "room",
        "thumbnail": "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D",
        "images": [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvb218ZW58MHx8MHx8fDA%3D"
        ],
        "discountedPrice": 16666.47,
        "location": " IT park , pune"
    },
    {
        "title": "Twilight Shores",
        "description": "Experience the breathtaking sunset at our exclusive beach location.",
        "price": 14999,
        "discountPercentage": 10,
        "rating": 4.75,
        "category": "beach",
        "thumbnail": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D",
        "images": [
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8fDA%3D",
            "https://media.istockphoto.com/id/480488320/photo/varkala-beach.webp?b=1&s=170667a&w=0&k=20&c=gQEIgT37cSG5rUWjuwy42MaOw2Weg5OXB3p3gaQSOMI=",
            "https://media.istockphoto.com/id/1472611904/photo/sunset-sky-with-tamarisk-tree-in-galgibaga-beach-in-goa-sunset-in-tropical-ocean.webp?b=1&s=170667a&w=0&k=20&c=b_3yndtUrQzBum2qDldGiKld1552pK_JwvJwOwz2iU8=",
            "https://media.istockphoto.com/id/1170282004/photo/beautiful-scenery-of-nature.webp?b=1&s=170667a&w=0&k=20&c=bwCUIIY68GpMI1qqVOkORxxLQgDvFTjHZN5urfAD2g0="
        ],
        "discountedPrice": 13499.10,
        "location": "Goa Beach"
    },
    {
        "title": "Alpine Sanctuary",
        "description": "Rejuvenate your senses with a stay at our serene mountain retreat.",
        "price": 24999,
        "discountPercentage": 15,
        "rating": 4.89,
        "category": "mountain",
        "thumbnail": "https://images.unsplash.com/photo-1618425064898-c9d9db022585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF1bnRhaW5zfGVufDB8fDB8fHww",
        "images": [
            "https://images.unsplash.com/photo-1601463501677-377b99c28d09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWF1bnRhaW5zfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1637872598908-c287d0abd748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWF1bnRhaW5zfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1626843660564-155a2ba9f91a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1612629941654-c70071c21c47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1626843660111-668a20d3f2ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D"
        ],
        "discountedPrice": 21249.15,
        "location": "Himalayas"
    },
    {
        "title": "Urban Oasis",
        "description": "Enjoy the vibrant nightlife and cityscape views from our downtown hotel.",
        "price": 17999,
        "discountPercentage": 12,
        "rating": 4.68,
        "category": "city",
        "thumbnail": "https://media.istockphoto.com/id/1325381293/photo/view-of-mumbai-showing-the-bandra-worli-sea-link-in-the-centre.webp?b=1&s=170667a&w=0&k=20&c=vDsXewvKIPqQ_l3OEshqPIbrTdTYEaZUiQox9E6M4cs=",
        "images": [
            "https://media.istockphoto.com/id/986504230/photo/mumbai-cityscape-in-the-summers.webp?b=1&s=170667a&w=0&k=20&c=sMVF0RPpEMFJ5ff_mK1MTod0CaBTxgsMgga_JQBYiGQ=",
            "https://media.istockphoto.com/id/1135915697/photo/mumbai-aerial-view-08.webp?b=1&s=170667a&w=0&k=20&c=MKOLJZjiw_nrXDSfLMi8KIKyixrItegW4G4XVg_G5KI=",
            "https://media.istockphoto.com/id/1175382761/photo/grand-place-square-in-brussels-belgium.webp?b=1&s=170667a&w=0&k=20&c=EcF51lRGy1yfu2Lgeg_lYJUSm5sMWLaWjmB2U0tY5BU=",
            "https://media.istockphoto.com/id/1072177258/photo/vizag.webp?b=1&s=170667a&w=0&k=20&c=YvrpL1_ujjxIK65XFHgKoSVBmRmc2-0Vi7WTzNJPikY=",
            "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
        ],
        "discountedPrice": 15839.12,
        "location": "New York City"
    },
    {
        "title": "Dune Retreat",
        "description": "A unique experience in the heart of the desert with luxurious amenities.",
        "price": 22999,
        "discountPercentage": 18,
        "rating": 4.92,
        "category": "desert",
        "thumbnail": "https://images.unsplash.com/photo-1547235001-d703406d3f17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzZXJ0fGVufDB8fDB8fHww",
        "images": [
            "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzZXJ0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1448831338187-78296e6fdc4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1516653980844-c68df1de5249?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1568801556940-e5b3a55fa6ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D"
        ],
        "discountedPrice": 18859.18,
        "location": "Sahara Desert"
    },
    {
        "title": "Pastoral Bliss",
        "description": "A peaceful retreat in the picturesque countryside with modern comforts.",
        "price": 15999,
        "discountPercentage": 14,
        "rating": 4.85,
        "category": "countryside",
        "thumbnail": "https://images.unsplash.com/photo-1535061765107-a01b438c753e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdW50cnlzaWRlfGVufDB8fDB8fHww",
        "images": [
            "https://images.unsplash.com/photo-1441749074938-1c6782303919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdW50cnlzaWRlfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1441940843596-c79085342b04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdW50cnlzaWRlfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1464263703464-63a9642fcab2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvdW50cnlzaWRlfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1700984735907-8fea44974393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdW50cnlzaWRlfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1673288454527-32e12aff5af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291bnRyeXNpZGV8ZW58MHx8MHx8fDA%3D"
        ],
        "discountedPrice": 13799.14,
        "location": "Tuscany"
    },
    {
        "title": "Wanderers' Hub",
        "description": "L'Oréal Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        "price": 19999,
        "discountPercentage": 13.31,
        "rating": 4.83,
        "category": "room",
        "thumbnail": "https://images.unsplash.com/photo-1720640318572-d3f3a99aa4d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
        "images": [
            "https://plus.unsplash.com/premium_photo-1674676471506-b869889de3da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1674676471506-b869889de3da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1720774531750-9483452857fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1719548170099-f7db3061420c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1720643710112-6bc7f98621bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTJ8fHxlbnwwfHx8fHw%3D"
        ],
        "discountedPrice": 16666.47,
        "loacation": "IT park , pune"
    },
    {
        "title": "Sunset Bliss",
        "description": "Experience the breathtaking sunset at our exclusive beach location.",
        "price": 14999,
        "discountPercentage": 10,
        "rating": 4.75,
        "category": "beach",
        "thumbnail": "https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=612x612&w=0&k=20&c=X-LBypcf5aIQ-h3IZSr42GiJzODcRlaUxvhWry03MW0=",
        "images": [
            "https://media.istockphoto.com/id/1089746020/photo/seashell.jpg?s=612x612&w=0&k=20&c=gdyv3OnX9UIbtYSOC2RR5wriH2HVTHFKdvvCatPTHBQ=",
            "https://plus.unsplash.com/premium_photo-1663133679087-bc5deb50ab00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8fDA%3D",
            "https://media.istockphoto.com/id/482535523/photo/goa-palolem-beach-from-above.webp?b=1&s=170667a&w=0&k=20&c=Witcew8YfkXqg1nI7HjgCTMFcuc3VWBWdVvhTOWWSZc=",
            "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNofGVufDB8fDB8fHww"
        ],
        "discountedPrice": 13499.10,
        "location": "Goa Beach"
    },
    {
        "title": "Mountain Escape",
        "description": "Rejuvenate your senses with a stay at our serene mountain retreat.",
        "price": 24999,
        "discountPercentage": 15,
        "rating": 4.89,
        "category": "mountain",
        "thumbnail": "https://media.istockphoto.com/id/1322194555/photo/mount-abu-hill-station-india.jpg?s=612x612&w=0&k=20&c=S4YYj7htf-m850N6WhF3xaaAPBMhcApEQUajAGbOYnQ=",
        "images": [
            "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
            "https://media.istockphoto.com/id/1417325612/photo/naneghat-reverse-fountain-spot-in-the-mountain-ranges-of-sahyadri-mountain-ranges-of.jpg?s=612x612&w=0&k=20&c=3knn1kzqrmX9nWcGTuzJ3MyqBSrVfpclkSP2MGn2npA=",
            "https://media.istockphoto.com/id/467621442/photo/storm-clouds-over-mountains-of-ladakh-jammu-and-kashmir-india.jpg?s=612x612&w=0&k=20&c=_xPHjA31itk6S8OVHzTljVEXM7zGdmpEq6cjI_0n7ME=",
            "https://media.istockphoto.com/id/2150373797/photo/panorama-of-lush-green-nilgiri-mountain-foothills-and-terrace-field-tea-garden-of-coonoor.jpg?s=612x612&w=0&k=20&c=kHVx51LShySmr9EN61KOHnsVpSobfUIJli3_1UDjDvw=",
            "https://media.istockphoto.com/id/1423667422/photo/heavy-flood-2022.jpg?s=612x612&w=0&k=20&c=3b0prsnytsBR5cK8xrLofOeJyx4Eyj_5vNZx7nVhuG0="
        ],
        "discountedPrice": 21249.15,
        "location": "Himalayas"
    },
    {
        "title": "City Lights",
        "description": "Enjoy the vibrant nightlife and cityscape views from our downtown hotel.",
        "price": 17999,
        "discountPercentage": 12,
        "rating": 4.68,
        "category": "city",
        "thumbnail": "https://media.istockphoto.com/id/1083982928/photo/jaipur-metro.jpg?s=612x612&w=0&k=20&c=gLJrIg6X9XvumVlMLyZ-RUi3SZJa0Yu4O4UfWVoJc0c=",
        "images": [
            "https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=",
            "https://media.istockphoto.com/id/2154204256/photo/woman-looking-at-verona-from-viewpoint.jpg?s=612x612&w=0&k=20&c=8kNnHVxFRAf1dfsSPdZlUREoONrK-154vJj7VpvR8jQ=",
            "https://media.istockphoto.com/id/120092576/photo/ariel-view-of-mumbai-with-all-its-beauty-at-night.jpg?s=612x612&w=0&k=20&c=MAFa8yTUKzKGZ2dK1FFuNFuQrVEsHeysi9XD_YBaRMw=",
            "https://media.istockphoto.com/id/1184398225/photo/growing-asian-cities-night-view-of-pune-city-in-india-during-diwali-festival.jpg?s=612x612&w=0&k=20&c=tJlE2RMCYl6fTC5hkkA3jDBnNXRtOnrj6odmf70aJpI=",
            "https://media.istockphoto.com/id/1912911752/photo/businessmen-on-the-street-standing-in-crowds-of-walking-people.jpg?s=612x612&w=0&k=20&c=qWcUj490hUEEx8LvNCkjLIKb722Cx1Zqf5eiHhn7to4="
        ],
        "discountedPrice": 15839.12,
        "location": "New York City"
    },
    {
        "title": "Desert Oasis",
        "description": "A unique experience in the heart of the desert with luxurious amenities.",
        "price": 22999,
        "discountPercentage": 18,
        "rating": 4.92,
        "category": "desert",
        "thumbnail": "https://media.istockphoto.com/id/1145064928/photo/tourist-riding-camel-in-desert.jpg?s=612x612&w=0&k=20&c=zZpS5SxgBNFhI5kb-oBnf2CL4RyBcRKgCGrImtKs7dw=",
        "images": [
            "https://media.istockphoto.com/id/521016602/photo/indian-woman-with-little-daughter-carrying-water-from-well.jpg?s=612x612&w=0&k=20&c=vyfWFJvS4rbHIOXiUEtHr3twbat_rnyw_vSaWeVdatw=",
            "https://media.istockphoto.com/id/628233608/photo/indian-men-riding-camels-on-sand-dunes-rajasthan-india.jpg?s=612x612&w=0&k=20&c=g9M-wcLglcAa7eb73TIHGOx-TJ9O9uA-ZjwRXPf_-jQ=",
            "https://media.istockphoto.com/id/623372082/photo/flock-of-camels-walking-in-desert-rajasthan-india.jpg?s=612x612&w=0&k=20&c=08P07BFBFX2aMfF3-juJzVJUg7ylpArO6R-pETm1Gg8=",
            "https://media.istockphoto.com/id/184144569/photo/xl-desert-sand-sunset.jpg?s=612x612&w=0&k=20&c=0aAa7rP2d6BB4lJYdA-zy-bjiYlipq1pkoSXqC50mCU=",
            "https://media.istockphoto.com/id/500170980/photo/group-of-happy-indian-children-running-across-sand-dune-india.jpg?s=612x612&w=0&k=20&c=q1HUWfwjSaO5Q7NhwmWqVJ5YSG5kvRuAJ-BpJErtM_8="
        ],
        "discountedPrice": 18859.18,
        "location": "Sahara Desert"
    },
    {
        "title": "Countryside Charm",
        "description": "A peaceful retreat in the picturesque countryside with modern comforts.",
        "price": 15999,
        "discountPercentage": 14,
        "rating": 4.85,
        "category": "countryside",
        "thumbnail": "https://media.istockphoto.com/id/499205750/photo/traditional-houseboat-on-kerala-backwaters.jpg?s=612x612&w=0&k=20&c=98bgp_jovy4QECb3SGrL9AmwfqRMBR9muKAifDKhC3E=",
        "images": [
            "https://media.istockphoto.com/id/839815136/photo/tea-plantation-in-munnar-kerala.jpg?s=612x612&w=0&k=20&c=Vftd_2bqJDimPmK46F6oUL7X4_Q-wwpY-MXl5jdju-g=",
            "https://media.istockphoto.com/id/1160316337/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=5gj1mezzy3cHlCQcqiOIM8pLBLeMyWoxW3e_R57eyv8=",
            "https://media.istockphoto.com/id/2154017387/photo/family-day-concept-real-family-outdoors.jpg?s=612x612&w=0&k=20&c=8Go5HVK5Fhu4EyYbA7WryJiR_EbqwJaP-TozsTWNSdU=",
            "https://media.istockphoto.com/id/641189012/photo/farmer-carrying-rice-paddy-bundle-for-harvesting.jpg?s=612x612&w=0&k=20&c=z-A4X788eWXYRT-nxUOFYT2YI3IocldYZf1pqq2im8I=",
            "https://media.istockphoto.com/id/680059526/photo/freedom-in-the-nature.jpg?s=612x612&w=0&k=20&c=NZjrl4k7FaoLCOnYjGeeRb9p1oY40wQrOiYjY6cs_jU="
        ],
        "discountedPrice": 13759.14,
        "location": "English Countryside"
    },
    {
        "title": "Beachside Bliss",
        "description": "Relax at the serene beaches with crystal clear waters and golden sands.",
        "price": 29999,
        "discountPercentage": 10.5,
        "rating": 4.7,
        "category": "beach",
        "thumbnail": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8fGVufDB8fHx8fA%3D%3D",
        "images": [
            "https://media.istockphoto.com/id/1563568199/photo/top-view-aerial-image-from-drone-of-an-stunning-beautiful-sea-landscape-beach-with-turquoise.webp?b=1&s=170667a&w=0&k=20&c=Se6Ep0LSyO0ohg9qqCYN8UDVFkwd5VSRjUtBCGPO4Co=",
            "https://media.istockphoto.com/id/1563568199/photo/top-view-aerial-image-from-drone-of-an-stunning-beautiful-sea-landscape-beach-with-turquoise.webp?b=1&s=170667a&w=0&k=20&c=Se6Ep0LSyO0ohg9qqCYN8UDVFkwd5VSRjUtBCGPO4Co=",
            "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoZXN8ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_photo-1664304458186-9a67c1330d02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1474533883693-59a44dbb964e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoZXN8ZW58MHx8MHx8fDA%3D"
        ],
        "discountedPrice": 26849.55,
        "location": "Goa"
    },
    {
        "title": "Sunset Paradise",
        "description": "Witness breathtaking sunsets at this beautiful location.",
        "price": 15999,
        "discountPercentage": 12.0,
        "rating": 4.9,
        "category": "sunset",
        "thumbnail": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8fGVufDB8fHx8fA%3D%3D",
        "images": [
            "https://plus.unsplash.com/premium_photo-1664123873215-5148fb6f9e35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1490735891913-40897cdaafd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
        ],
        "discountedPrice": 14079.12,
        "location": "Maldives"
    },
    {
        "title": "Mountain Retreat",
        "description": "Escape to the mountains for a peaceful and rejuvenating experience.",
        "price": 24999,
        "discountPercentage": 15.0,
        "rating": 4.8,
        "category": "mountain",
        "thumbnail": "https://media.istockphoto.com/id/896986980/photo/dzukou-valley-nagaland-north-east-india.jpg?s=612x612&w=0&k=20&c=JJC9I3ztD6lcdvn3VGFOsuCi66xhESaBGSsCJkVuGE0=",
        "images": [
            "https://media.istockphoto.com/id/629941782/photo/golden-sunset-on-mt-everest-summit-himalaya-mountains-peaks-panorama.jpg?s=612x612&w=0&k=20&c=1X_BaOcatohGXTxlzVSgD5RnO-YMzjW2U_Zh63iJAXg=",
            "https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?s=612x612&w=0&k=20&c=ppnPB3UoILzzxR48gcuUzZx92zepSwegQ-0NqfBDAzk=",
            "https://media.istockphoto.com/id/471931381/photo/beautiful-landscape-in-norther-part-of-india.jpg?s=612x612&w=0&k=20&c=crzrf_yNEofxfdVWDK85kt_wi2t0RUs7TLnTyJJ0WAg=",
            "https://media.istockphoto.com/id/1061972196/photo/camel-safari-ride-caravan-in-hunder-desert-nubra-valley-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=czU_-_ruVm2n917nAcClu9Cud6cRP3qmeUTM2njV_hU=",
            "https://media.istockphoto.com/id/174863621/photo/panoramic-view-of-darjeeling-with-mount-kanchengjunga-in-the-background.jpg?s=1024x1024&w=is&k=20&c=HaiZWhevzWoOJ4x0JXz01aM10QdywFA3jzJ69DWoXhE="
        ],
        "discountedPrice": 21249.15,
        "location": "Himalayas"
    }
]