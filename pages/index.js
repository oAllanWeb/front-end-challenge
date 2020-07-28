import Link from 'next/link';
import { get } from '../utils/API';

function PreactStars({genres}) {
  return (
    <div>
      {genres.map((genre) =>
        <Link href={`#${genre.id}`}>
          <a>{genre.name}</a>
        </Link>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const { genres } = await get('/genre/movie/list')
  return {
    props: {
      genres,
    },
  }
}

export default PreactStars