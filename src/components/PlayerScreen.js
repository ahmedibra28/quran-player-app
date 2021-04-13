import { useEffect } from 'react'
import ReactPlayer from 'react-player'

const PlayerScreen = ({ reciterDetail, chapterDetail }) => {
  const audiLink = (reciter, number) =>
    reciter + '/' + ('00' + number).slice(-3) + '.mp3'

  useEffect(() => {}, [chapterDetail, reciterDetail])

  return (
    <div className='h-100 shadow-lg p-3 bg-red'>
      <h1 className='fs-5 fw-bold text-center'>Player</h1> <hr />
      {reciterDetail !== null && chapterDetail !== null ? (
        <ul className='list-group text-end'>
          <div>
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
            >
              <span className='fw-bold'>Reciter: </span>{' '}
              <span>{reciterDetail.name}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
            >
              <span className='fw-bold'>Chapter In Arabic: </span>{' '}
              <span>{chapterDetail.name_arabic}</span>
            </li>
            <hr />

            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
            >
              <span className='fw-bold'>Chapter In English: </span>{' '}
              <span>{chapterDetail.name_complex}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
            >
              <span className='fw-bold'>Revelation Place: </span>{' '}
              <span>{chapterDetail.revelation_place}</span>
            </li>
            <hr />
            <li
              className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
            >
              <span className='fw-bold'>Translated Name: </span>{' '}
              <span>{chapterDetail.translated_name.name}</span>
            </li>
            <hr />

            <div className='div '>
              <ReactPlayer
                url={audiLink(reciterDetail.Server, chapterDetail.id)}
                controls={true}
                playing={true}
                width='100%'
                height='60px'
              />
            </div>
          </div>
        </ul>
      ) : (
        <div className='text-center'>
          <span className='spinner-border'></span>
        </div>
      )}
    </div>
  )
}

export default PlayerScreen
