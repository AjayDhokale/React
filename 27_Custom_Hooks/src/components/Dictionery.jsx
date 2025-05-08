import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useFetchData from '../hooks/useFetchData'

const Dictionary = () => {
    // const [response, setResponse] = useState([])
    const [word, setWord] = useState('hello')
    const response=  useFetchData(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    // useEffect(() => {
    //     async function getUsersData() {
    //         try {
    //             const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    //             setResponse(res.data)
    //             console.log(res);
                
    //         } catch (error) {
    //             setResponse([])
    //         }
    //     }

    //     getUsersData()
    // }, [word])

    return (
        <div className=" bg-gradient-to-b from-blue-50 to-white p-6">
            <div className=" w-90 mx-auto text-center">
                <input
                    type="text"
                    className="w-full p-3 text-2xl border-b-4 border-blue-500 outline-none focus:border-blue-700"
                    placeholder="Search a word..."
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
            </div>

            <div className="mt-10 w-200 ">
                {
                    response.length === 0 ?
                        (
                            <p className="text-center text-gray-600 text-xl mt-10">🔍 No results found. Try another word.</p>
                        )
                        :
                        (
                            response.map((res) => (
                                <div key={res.word} className="bg-[#f6faff] shadow-[0_0_10px_rgba(128,128,228)] rounded-xl p-6 my-6 border border-gray-200">
                                    <h2 className="text-3xl font-bold text-blue-700 mb-4">
                                        Word: <span className="uppercase tracking-wider">{res.word}</span>
                                    </h2>

                                    {/* Audio */}
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">🔊 Pronunciation:</h3>
                                    <div className="flex gap-2 ">
                                        {
                                            res.phonetics.map(ph => {
                                                if (ph.audio != '') {
                                                    return (
                                                        <div className="mb-6">
                                                            <audio src={ph.audio} className='border-4 border-blue-600 rounded-2xl' controls></audio>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>

                                    {/* Meanings */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-700 mb-2">📚 Meanings:</h3>
                                        {res.meanings.map((mean, i) => (
                                            <div key={i} className="mb-4 pl-4 border-l-4 border-blue-400">
                                                <p className="text-lg font-medium text-blue-600 mb-1">
                                                    Part of Speech: <span className="capitalize">{mean.partOfSpeech}</span>
                                                </p>
                                                {mean.definitions.map((def, j) => (
                                                    <p key={j} className="text-gray-700 ml-4 mb-2">
                                                        ➤ {def.definition}
                                                    </p>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
            </div>
        </div>
    )
}

export default Dictionary
