import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mx-auto">
        <div className="mb-6 text-base text-center">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="max-w-3xl mb-5 md:mb-10 mx-auto">
        <CoverImage title={title} src={coverImage} height={320} width={840} />
      </div>
    </>
  );
}
