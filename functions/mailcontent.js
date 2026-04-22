// functions/api/random.js
// 这个文件会被 Cloudflare 当作服务端 Worker 执行，不会直接暴露源码

const texts = [
	"Question about you company jar lids\nHi Team,\n\nI noticed many glass jars on the market suffer from loose silicone seals after a few months. We’ve developed a 'stay-tight' gasket that lasts 3x longer. Interested in a quick vacuum test video?\n\nBest regards,",
	"A small feedback on your glassware clarity\nHello,\n\nCloudy glass can make a premium brand look cheap. Our lead-free crystal is tested to stay brilliant even after 500 dishwasher cycles. May I send you a side-by-side photo comparison?\n\nCheers,",
	"Drop-test for you company?\nHi,\n\nShipping glass is risky. We designed custom foam packaging that keeps breakage under 0.2%. Would you like to see our drop-test footage from 1.5 meters?\n\nThanks,",
	"Regarding the fading markings on measuring cups\nDear Brand Manager,\n\nIt’s frustrating when customers leave 1-star reviews because the scales washed off. We use fused ceramic labels that are permanent. Want to test a sample with your toughest detergent?\n\nBest regards,",
	"Small runs for your new collection?\nHi there,\n\nLaunching a new glass design shouldn't require a 5,000-piece risk. We support new lines with MOQs as low as 500. Is this something that could help your inventory planning?\n\nBest,",
	"Quick question on you company stemware\nHello,\n\nAre you seeing high breakage rates at the stem? We’ve reinforced the stress points on our crystal glasses without losing the elegant feel. Can I ship two pieces for your team to try and break?\n\nCheers,",
	"A thought on your bamboo lid jars\nHi,\n\nBamboo is beautiful but mold is a nightmare for customers. Our lids undergo a food-safe carbonization process to stay mold-free. Would you like to see the lab report?\n\nBest regards,",
	"Regarding glass delivery lead times\nHello,\n\nIf your current supplier is pushing 12-week delays, we might be able to help. We are currently maintaining a 30-day production cycle for standard jars. Worth a quick chat?\n\nThanks,",
	"A safety note on borosilicate glass\nDear Buyer,\n\nThermal shock is the #1 cause of glass injuries in the kitchen. Our borosilicate containers go from -20°C to 200°C safely. May I send you our safety certification?\n\nBest regards,",
	"A price benchmark for you company\nHi,\n\nCurious if you're paying a 'premium tax' on your current glassware? Send me your two most popular specs, and I'll give you a benchmark price in 24 hours. No obligation.\n\nBest,",
	"Your customers hate leaky oil bottles\nHello,\n\nSticky cabinets ruin the user experience. We designed a drip-free spout for glass dispensers that actually works. Want to see a 10-second pouring demo?\n\nCheers,",
	"Regarding the weight of your glass bowls\nHi there,\n\nHeavy glass feels premium, but shipping costs kill the margin. We’ve optimized our wall thickness to balance durability and logistics costs. Interested in the weight specs?\n\nBest regards,",
	"A quick way to check glass rim quality\nHello,\n\nUneven rims are a subtle sign of cheap manufacturing. We fire-polish every piece for a perfectly smooth finish. Can I send a close-up photo of our rim vs. standard ones?\n\nThanks,",
	"Do your glass canisters stack safely?\nHi,\n\nToppled jars lead to broken glass and angry customers. Our lids are designed with a recessed center for 100% stable stacking. Want to see the stacking test?\n\nBest,",
	"Regarding the 'green tint' in clear glass\nHello,\n\nHigh-iron glass has that cheap green look. Our ultra-white flint glass is crystal clear, making your product colors pop. May I send a clarity comparison?\n\nCheers,",
	"A thought on your spice jar seals\nHi there,\n\nClumping spices mean the seal is failing. Our jars pass a 24-hour humidity chamber test. Would you like to see the results for your spice line?\n\nBest,",
	"Regarding you company barware durability\nHello,\n\nBartenders are tough on glass. Our tumblers have a toughened base to resist chipping during high-volume shifts. Interested in a few trial pieces?\n\nCheers,",
	"A small observation on your honey jars\nHi,\n\nHoney leaks through threads easily. We use precision-molded necks to ensure a 100% airtight fit with metal or wood lids. Can I send you a leak-test video?\n\nBest regards,",
	"Ready to ship: Sample pack for you company\nHello,\n\nI’ve put together a small kit of our top-selling airtight jars. No charge for the samples, just see the quality for yourself. Should I send them to your main office?\n\nThanks,",
	"Regarding heat-resistant glass for candles\nDear Brand Owner,\n\nGlass cracking is a huge liability for candle brands. Our vessels are tested for 8-hour continuous burn heat resistance. Want to see the safety specs?\n\nBest regards,",
	"A question about your current glass defect rate\nHi,\n\nIf you're seeing more than 3% defects, you're losing money. Our dual-inspection line keeps defects under 1.2%. Is this an area you're looking to improve?\n\nBest,",
	"Do your customers re-use your jars?\nHello,\n\nBeautiful, durable jars turn your packaging into a permanent ad in the customer's kitchen. We design for 'after-life' use. Want to see our most 'Instagrammable' shapes?\n\nCheers,",
	"Regarding the scratch resistance of your glassware\nHi,\n\nMetal spoons shouldn't leave marks on good glass. Our surface hardening process makes our bowls 3x more scratch-resistant. Can I send the test video?\n\nBest,",
	"A quick note on dishwasher-safe glass\nHello,\n\n'Hand wash only' is a dealbreaker for many modern buyers. All our kitchen glass is certified for 500+ industrial wash cycles. Interested in the lab report?\n\nThanks,",
	"Regarding you company coffee canisters\nHi,\n\nUV light kills coffee flavor. We offer amber-tinted glass that blocks 99% of rays while looking premium. Is this a feature your customers would value?\n\nBest regards,",
	"A thought on your yogurt jar shape\nHello,\n\nNarrow-bottom jars are hard to clean. We designed a wide-base jar that’s spoon-friendly and easy to wash. Would you like to see the technical drawing?\n\nCheers,",
	"Regarding the clarity of your wine glasses\nHi there,\n\nDoes your current stemware show bubbles or streaks under bright light? Our vacuum-casting ensures zero imperfections. May I send a high-res photo?\n\nBest,",
	"A question on glass shipping breakage\nHello,\n\nAre you tired of 'replacing' broken glass for your online orders? Our e-commerce ready packaging is designed to survive a 1-meter drop. Interested in a demo?\n\nThanks,",
	"Regarding the lid material for your jars\nHi,\n\nPlastic lids stain, and metal lids rust. We offer food-grade silicone and treated acacia wood. Would you like to see our 2025 lid catalog?\n\nBest,",
	"A quick way to spot cheap glass\nHello,\n\nHold a glass to the light; if you see 'waves,' it's low quality. Our precision pressing ensures perfectly flat surfaces. Want to see the difference?\n\nCheers,",
	"Regarding your OEM glass projects\nHi,\n\nCustom molds don't have to be expensive. We offer low-cost prototyping for unique bottle shapes. Do you have a design you've been sitting on?\n\nBest regards,",
	"A note on lead-free compliance\nHello,\n\nCalifornia Prop 65 is getting stricter. Our glassware is 100% lead and cadmium-free with full certification. Is your current supply compliant?\n\nBest,",
	"Regarding the pour spout on your glass jugs\nHi,\n\nA bad spout means a messy table. We engineered a drip-stop lip for all our pitchers. Can I send you a 5-second pouring clip?\n\nCheers,",
	"A thought on your pantry organization line\nHello,\n\nUniformity is key for pantry brands. We ensure consistent height and diameter across every batch—no 'wobbly' shelves. Worth a quick check?\n\nThanks,",
	"Regarding the rim thickness of your tumblers\nHi,\n\nToo thin and it breaks; too thick and it feels cheap. We’ve found the 'sweet spot' for daily use. Want to see our most popular specs?\n\nBest,",
	"A question about your glass supplier's communication\nHello,\n\nWaiting 3 days for a quote is frustrating. We guarantee a response within 4 hours. If you're looking for a more responsive partner, let’s talk.\n\nBest regards,",
	"Regarding the transparency of your glass bowls\nHi there,\n\nShowcase your food, not the glass. Our low-iron formula provides maximum light transmission. May I send a sample for your next photoshoot?\n\nCheers,",
	"A note on stackable storage jars\nHello,\n\nVertical space is precious. Our lids 'lock' the jar above them for a 100% safe stack. Would you like to see a photo of them in a real kitchen?\n\nBest,",
	"Regarding your brand's sustainability story\nHi,\n\nGlass is infinitely recyclable, but the packaging often isn't. We offer 100% plastic-free shipping solutions. Does this align with your brand values?\n\nBest regards,",
	"A thought on your glass butter dishes\nHello,\n\nMost glass butter dishes slide around on the counter. We added a subtle 'grip' base to ours. Small detail, big difference. Want a sample?\n\nCheers,",
	"Regarding the handle strength of your glass mugs\nHi,\n\nThe handle is the weakest point. We use an integrated molding process that makes it nearly unbreakable. Can I send the stress-test video?\n\nBest,",
	"A question about glass inventory risk\nHello,\n\nWhy tie up cash in 6 months of stock? Our fast-track 3-week production allows you to order monthly. Is this something your CFO would like?\n\nThanks,",
	"Regarding the laser etching on your glasses\nHi there,\n\nPrinting fades, but laser etching is forever. We offer high-precision logo etching that doesn't weaken the glass. Want to see a sample logo?\n\nCheers,",
	"A note on high-borosilicate vs. soda-lime\nHello,\n\nMany brands overpay for borosilicate when soda-lime is enough, or vice-versa. We’ll help you choose the right material for your price point. Interested?\n\nBest,",
	"Regarding the seal on your spice grinders\nHi,\n\nFreshly ground spices lose aroma if the jar isn't airtight. Our grinders come with a secondary silicone seal. Want to see the engineering drawing?\n\nBest regards,",
	"A thought on your glass tea carafes\nHello,\n\nThermal shock from boiling water is the big risk here. Our carafes are tested at 150°C temperature jumps. Can I send the safety report?\n\nCheers,",
	"Regarding the clarity of your oil dispensers\nHi,\n\nClear glass makes the gold of the oil look beautiful. Our dispensers are made from high-clarity flint glass. Want a photo for comparison?\n\nBest,",
	"A question on glass mold fees\nHello,\n\nSome factories hide their margin in high mold fees. Ours are transparent and often waived for orders over 2k pieces. Have a project in mind?\n\nThanks,",
	"Regarding the grip of your glass tumblers\nHi there,\n\nWet hands mean dropped glasses. We added a subtle 'ripple' texture to our latest line for better grip. Want to see the design?\n\nCheers,",
	"A final thought on your glass sourcing\nHello,\n\nIf you're not 100% happy with your current glass quality, why settle? Let us send you one 'perfect' sample piece. If it's not better, ignore us.\n\nBest regards,"
];

export function onRequest(context) {
    const random = texts[Math.floor(Math.random() * texts.length)];
    
    return new Response(random, {
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Access-Control-Allow-Origin": "*"  // 允许其他网站调用
        }
    });
}