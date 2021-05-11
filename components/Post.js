import Link from 'next/link';

export default function Post({ post }) {

  const { title, body, id } = post;

  return (
    <div className="link">
      <Link href={`/${id}`}>
        <div className="Card">
          <h1 className="Card--title">
            {id}. {title}
          </h1>
          <p className="Card--body">{body}</p>
        </div>
      </Link>

      <style>
        {`
            .link {
              cursor: pointer;
            }
        
        `}
      </style>

    </div>
  );
}
