import http from "@/lib/http";

export function loadUsers(page = 0){
    return http.get("/api/v1/users/list", { params: { page, size: 5} });
}