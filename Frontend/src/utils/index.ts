export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const getStatus = (deadline: Date, status: string) => {
  const now = new Date();
  const deadlineDate = new Date(deadline);

  if (status === "DONE") {
    return now > deadlineDate ? "Achieved" : "In Progress";
  } else {
    return now > deadlineDate ? "Failed" : "In Progress";
  }
};

export const formatDateForInput = (dateString: Date) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
