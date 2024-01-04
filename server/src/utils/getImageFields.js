export default function getImageFields(files) {
  const fields = {};

  for (const key in files) {
    fields[
      key
    ] = `http://localhost:${process.env.PORT}/images/${files[key][0]?.filename}`;
  }

  return fields;
}
