import React from 'react'
const getAllUser = async () => {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    // console.log(data);
    return {data};
  } catch (error) {
    console.error(error);
    return [];
  } 
}

export default getAllUser;
