'use client'
import '@/styles/globals.css'
import { useState } from 'react'

export default function Page() {
  const questions = [
    {
      questionText: '恋人同士プリクラを撮ったことがある？',
      answerOptions: [
        { answerText: 'はい', isCorrect: true },
        { answerText: 'いいえ', isCorrect: false },
      ],
    },
    {
      questionText:
        '登校中の曲がり角で意中の女性とぶつかったことがある？(食パンはなくても可)',
      answerOptions: [
        { answerText: 'はい', isCorrect: true },
        { answerText: 'いいえ', isCorrect: false },
      ],
    },
    {
      questionText:
        '俺(私)、この戦いが終わったらあいつにプロポーズするんだ(されるんだ)、のやつ',
      answerOptions: [
        { answerText: 'はい', isCorrect: true },
        { answerText: 'いいえ', isCorrect: false },
      ],
    },
    {
      questionText:
        '彼と彼女は、街の喧騒から離れた小さなカフェで出会いました。彼女はひそかに音楽を作ることが大好きで、彼は詩を書くことに情熱を傾けていました。出会ったその瞬間から、お互いのアートに対する熱い思いを分かち合うこととなりました。数年後、彼らの関係は深まり、お互いに欠かせない存在となっていました。しかし、時が経つにつれて、仕事や忙しさが増えていき、お互いの時間がますます限られていきました。ある日、彼女は大きな音楽コンペティションに参加することを決意しました。しかし、彼の方は仕事のプレッシャーや責任を感じ、彼女のことを支える時間を取ることが難しくなっていました。彼女は忙しい日々の中で、一人で練習に励みました。彼との時間が少なくなり、寂しさが募っていきました。そして、コンペティションの日がやってきました。舞台に立ちながら、彼女は彼が応援に来てくれることを願いましたが、彼の姿は見当たりませんでした。結果発表の瞬間、彼女は堂々としたパフォーマンスを披露しましたが、何かが足りない気がしていました。そして、結果は芳しくありませんでした。失望と寂しさが彼女を包み込みました。彼女は帰宅し、彼に連絡を取ろうとしましたが、彼からの返事はありませんでした。やがて、彼女は彼との関係が変わりつつあることを感じました。そして、彼女は涙を流しながら、彼に送る手紙を書きました。手紙には、お互いの道を進む決断をすることが大切だという想いが綴られていました。しばらくして、彼からの返事が届きました。彼の手紙には、彼女を傷つけたくないという思いと、自分自身の進むべき道を選ぶ覚悟が込められていました。彼女は涙を流しながら、手紙を読みました。そして、二人はお互いの夢や希望を胸に、関係が変わる痛みを胸に秘めつつも、彼女は新たな一歩を踏み出す決意をしたのであった。のやつ【ChatGPTより作成】',
      answerOptions: [
        { answerText: 'はい', isCorrect: true },
        { answerText: 'いいえ', isCorrect: false },
      ],
    },
    {
      questionText:
        '物語の舞台は30xx年、近未来の都市。主人公は、科学者の協力を得て、幼少期に失われた家族を探し始める。彼はある日、謎の実験施設にたどり着き、施設内で家族の行方を追う手がかりを見つける一方、不気味な実験の存在を知ることになる。次第に、施設の深部で科学者たちが行っていた実験の恐ろしい真実に迫っていくが、実は、彼らは時間旅行の実験を行っており、その過程で悲劇的な後遺症が発生していたのだった。主人公は、自身の存在が過去と未来の時間線に影響を与えており、家族を失った過去の出来事そのものが歪んでいることを初めて知る。物語は、主人公が過去や未来を行き来しながら、家族を取り戻すために必死に戦う姿を描きながらも、その過程で主人公自身の存在が次第に脆弱になっていくことが明らかになる。最終的に、主人公は家族を救うために過去に干渉しようとするが、その行動が逆に現在の世界を崩壊させる結果となってしまう。物語は、家族の願いを叶えるために自己犠牲を強いられる悲劇的な結末を迎えるが、主人公の存在は次第に消えていき、家族を取り戻すことは叶わなかった。しかし、その犠牲によって現実の時間線が修復され、他の人々が幸せな未来を歩む道が開かれるのだった。のやつ【ChatGPTより作成】',
      answerOptions: [
        { answerText: 'はい', isCorrect: true },
        { answerText: 'いいえ', isCorrect: false },
      ],
    },
  ]

  const [current, setCurrent] = useState(0)
  const [showFinish, setShowFinish] = useState(false)
  const [score, setScore] = useState(0)
  const check = (isCorrect: Boolean) => {
    if (isCorrect === true) {
      alert('へ〜')
      setScore(score + 1)
    } else {
      alert('ふ〜ん')
      setScore(score + 1)
    }

    const nextQuestion = current + 1
    if (nextQuestion < questions.length) {
      setCurrent(nextQuestion)
    } else {
      setShowFinish(true)
    }
  }
  return showFinish ? (
    <div className="flex justify-center items-center flex-col h-screen">
      <a
        href={`https://twitter.com/intent/tweet?text=青春とはなんでしょうか。。。&url=https://celebration-of-youth.vercel.app/`}
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Twitter
      </a>
      <p className="font-bold text-gray-700 dark:text-gray-400 text-2xl mt-3">
        青春とはなんなんでしょうか
      </p>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col h-screen">
      <a
        href="#"
        className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {' '}
          {score + 1} / 5問
        </h5>
        <p className="font-bold text-gray-700 dark:text-gray-400">
          {questions[current].questionText}
        </p>
      </a>
      <div>
        <ul className="flex mt-4 space-y-2">
          {questions[current].answerOptions.map((answer, key) => (
            <li
              key={key}
              onClick={() => check(answer.isCorrect)}
              className="flex"
            >
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {answer.answerText}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
