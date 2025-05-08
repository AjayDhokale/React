import React, { useState } from 'react'

const ToggleDiv = () => {

    const [showDiv, setShowDiv] = useState(true)


    // const toggleTrueFalse = () => {


    //     // setShowDiv(!showDiv)


    //     // if (showDiv) {
    //     //     setShowDiv(false)
    //     // } else {
    //     //     setShowDiv(true)
    //     // }
    // }

    return (
        <div className='w-[70%] flex flex-col justify-center items-center'>

            <button className='bg-black border-2 text-2xl px-6 cursor-pointer  py-3 rounded-lg m-10' onClick={() => setShowDiv(showDiv ? false : true)}>
                {showDiv ? "Hide" : "Show"} Div
            </button>

            {
                showDiv && <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eveniet doloribus nihil quisquam ratione omnis dolorem odio eius voluptatem blanditiis? Veritatis tenetur placeat libero, commodi numquam ad in cumque delectus rerum exercitationem minus, inventore odio, nihil id. Corrupti eveniet asperiores harum ullam dolores distinctio molestiae eius dolore nemo voluptates alias ea, a illum ratione porro sunt nulla illo velit eaque minus placeat rerum maxime id? Aliquam corporis veritatis laboriosam quasi dolorum, nam accusantium? Quia, vero. Molestiae quisquam nam labore quae quos? Ab vitae, est officia ipsam reprehenderit eveniet quo voluptatem, dolorum hic in molestiae quod dolor, magnam commodi! Repellat voluptas maxime, ab dolores commodi recusandae porro suscipit laudantium cumque consectetur voluptatum non dolore, libero illo officiis! Placeat quisquam odit consequuntur? Voluptate quam sint possimus at deserunt repellendus? Architecto consequatur reiciendis sapiente perspiciatis commodi repudiandae officia? Iure magnam nobis accusamus ullam qui ab iste tempore eaque harum delectus deleniti unde, perspiciatis odio aut voluptatibus ad voluptate natus error numquam ea libero doloremque? Vitae rerum possimus quae rem sunt earum magnam sed, vero blanditiis culpa itaque deleniti inventore! Commodi sunt, consectetur incidunt nobis ad odit. Cumque, natus! Velit facere officia, tempora minima consequatur optio nulla odio obcaecati alias sunt hic at rem!
                </div>
            }

        </div>
    )
}

export default ToggleDiv
