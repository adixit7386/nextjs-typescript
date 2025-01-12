interface Props {
  params: {
    id: string;
  };
}

export default function UserWithIdPage({ params }: Props) {
  if (!params?.id) {
    throw new Error("ID parameter is required");
  }

  console.log(params.id);
  return (
    <div>
      <h1>We are in the user page</h1>
      <p>User ID: {params.id}</p>
    </div>
  );
}
